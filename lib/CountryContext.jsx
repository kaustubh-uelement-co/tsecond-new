"use client";

import { createContext, useContext, useState, useEffect } from "react";

const CountryContext = createContext({
  country: "US",
  changeCountry: () => {},
});

export const COUNTRIES = [
  { code: "US", name: "USA", flag: "/publicOPT/us-flag.webp" },
  { code: "IN", name: "IND", flag: "/publicOPT/India-flag.webp" },
  { code: "GB", name: "UK", flag: "/publicOPT/uk-flag.webp" },
];

export function CountryProvider({ children }) {
  const [country, setCountry] = useState("US");

  useEffect(() => {
    // 1. Check URL parameters
    const params = new URLSearchParams(window.location.search);
    const langParam = params.get("lang")?.toUpperCase();
    if (langParam === "IN" || langParam === "US" || langParam === "GB") {
      setCountry(langParam);
      localStorage.setItem("selectedCountry", langParam);
      return;
    }

    // 2. Check localStorage
    const saved = localStorage.getItem("selectedCountry");
    if (saved === "IN" || saved === "US" || saved === "GB") {
      setCountry(saved);
      return;
    }

    // 3. Fallback to IP geolocation
    const fetchCountry = async () => {
      try {
        const res = await fetch("https://ipapi.co/json/");
        const data = await res.json();
        const code = data?.country?.toUpperCase();
        if (code === "IN" || code === "GB") {
          setCountry(code);
          localStorage.setItem("selectedCountry", code);
        } else {
          setCountry("US");
          localStorage.setItem("selectedCountry", "US");
        }
      } catch (e) {
        // Default to US
        setCountry("US");
      }
    };
    fetchCountry();
  }, []);

  const changeCountry = (newCountry) => {
    setCountry(newCountry);
    localStorage.setItem("selectedCountry", newCountry);
    window.dispatchEvent(
      new CustomEvent("countryChange", { detail: newCountry })
    );
  };

  return (
    <CountryContext.Provider value={{ country, changeCountry }}>
      {children}
    </CountryContext.Provider>
  );
}

export function useCountry() {
  const context = useContext(CountryContext);
  return context || { country: "US", changeCountry: () => {} };
}

export function defenceText(country = "US", { capitalize = false } = {}) {
  const isIndia = country === "IN";
  const word = isIndia ? "defence" : "defense";
  if (!capitalize) return word;
  return word.charAt(0).toUpperCase() + word.slice(1);
}

export function getProductDatasheet(product, country = "US") {
  if (!product?.datasheet) return "/Tsecond_Product_Portfolio_Datasheet.pdf";
  if (typeof product.datasheet === "string") return product.datasheet;
  if (country === "IN" && product.datasheet.in) return product.datasheet.in;
  if (country !== "IN" && product.datasheet.us) return product.datasheet.us;
  return product.datasheet.default || "/Tsecond_Product_Portfolio_Datasheet.pdf";
}
