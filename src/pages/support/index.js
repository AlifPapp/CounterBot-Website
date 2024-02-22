import React, { useEffect } from "react";

var link = "https://discord.gg/fnBrAqGDbu";

const Link = () => {
    // Redirect to support link
    useEffect(() => {
        if (typeof window !== "undefined") {
            window.location.replace(link);
        }
    }, []);

    return (
        <div>
            <p>Should auto-redirect fail, please use the provided link below.</p>
            <a href={link} className="text-blue-600 underline">{link}</a>
        </div>
    );
};

export default Link;

export const Head = () => <title>Support</title>;
