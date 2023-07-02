"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { ThemeProvider } from "next-themes";
import React from "react";

const Providers = ({ children }: { children: React.ReactNode }) => {
    return (
        <ThemeProvider attribute="class" enableSystem={true} enableColorScheme={false}>
            <Header />
            <main className="dark:text-white dark:bg-gray-900">{children}</main>
            <Footer />
        </ThemeProvider>
    );
};

export default Providers;
