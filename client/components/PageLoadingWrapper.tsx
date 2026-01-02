import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Loader } from "./Loader";

interface PageLoadingWrapperProps {
    children: React.ReactNode;
}

export const PageLoadingWrapper: React.FC<PageLoadingWrapperProps> = ({ children }) => {
    const location = useLocation();
    const [loading, setLoading] = useState(false);
    const [displayChildren, setDisplayChildren] = useState(children);

    useEffect(() => {
        // Show loader on path change
        setLoading(true);

        // Artificial delay for "premium" feel (800ms)
        const timer = setTimeout(() => {
            setLoading(false);
            setDisplayChildren(children);
            window.scrollTo(0, 0);
        }, 800);

        return () => clearTimeout(timer);
    }, [location.pathname]);

    // Sync children immediately if not loading
    useEffect(() => {
        if (!loading) {
            setDisplayChildren(children);
        }
    }, [children, loading]);

    return (
        <>
            {loading && <Loader />}
            <div className={loading ? "opacity-0" : "opacity-100 transition-opacity duration-300"}>
                {displayChildren}
            </div>
        </>
    );
};
