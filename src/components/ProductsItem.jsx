import React from "react";

export default function ProductsItem({ item }) {
    return (
        <div className="flex flex-col gap-3 p-4 border rounded-md shadow-md">
            {item.images && item.images[0] ? (
                <img
                    src={item.images[0]}
                    alt={item.title || "No title"}
                    className="w-full h-48 object-cover rounded-md"
                />
            ) : (
                <div className="w-full h-48 bg-gray-200 rounded-md flex items-center justify-center">
                    No image available
                </div>
            )}

            <span className="px-3 py-1 bg-primary text-white inline-block max-w-max rounded-default text-sm">
                {item.location?.country || "No country"}
            </span>
            <h3 className="text-lg font-bold">
                {item.location?.address || "No address"}
            </h3>
            <ul className="flex items-center gap-3">
                <li className="flex items-center gap-1">
                    <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth={0}
                        viewBox="0 0 24 24"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M20 9.557V3h-2v2H6V3H4v6.557C2.81 10.25 2 11.525 2 13v4a1 1 0 0 0 1 1h1v4h2v-4h12v4h2v-4h1a1 1 0 0 0 1-1v-4c0-1.475-.811-2.75-2-3.443zM18 7v2h-5V7h5zM6 7h5v2H6V7zm14 9H4v-3c0-1.103.897-2 2-2h12c1.103 0 2 .897 2 2v3z" />
                    </svg>
                    <span>{item.details?.bedrooms || "N/A"}</span>
                </li>
                <li className="flex items-center gap-1">
                    <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth={0}
                        viewBox="0 0 24 24"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M21 10H7V7c0-1.103.897-2 2-2s2 .897 2 2h2c0-2.206-1.794-4-4-4S5 4.794 5 7v3H3a1 1 0 0 0-1 1v2c0 2.606 1.674 4.823 4 5.65V22h2v-3h8v3h2v-3.35c2.326-.827 4-3.044 4-5.65v-2a1 1 0 0 0-1-1zm-1 3c0 2.206-1.794 4-4 4H8c-2.206 0-4-1.794-4-4v-1h16v1z" />
                    </svg>
                    <span>{item.details?.bathrooms || "N/A"}</span>
                </li>
            </ul>
            <p>
                Price per Night:
                {item.price?.pricePerNight?.toLocaleString() || "N/A"}{" "}
                {item.price?.currency || ""}
            </p>
            {item.price?.pricePerMonth && (
                <p>
                    Price per Month:
                    {item.price.pricePerMonth.toLocaleString()}{" "}
                    {item.price.currency}
                </p>
            )}
            {item.price?.pricePerSale && (
                <p>
                    Price for Sale:
                    {item.price.pricePerSale.toLocaleString()}{" "}
                    {item.price.currency}
                </p>
            )}
        </div>
    );
}
