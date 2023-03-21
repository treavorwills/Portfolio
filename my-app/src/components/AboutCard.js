import React from "react";

export default function AboutCard(props) {
    return (
        <div className="flex flex-wrap justify-center">
        {props.aboutItems.map(item => (
        <div className="p-4 shadow-md lg:max-w-lg m-5">
            <div className="space-y-2">
                <h3 className="text-2xl font-semibold text-center">
                    {item.title}
                </h3>
                <p className="text-gray-600">
                    {item.text}
                </p>
            </div>
        </div>
        ))}
        </div>
    );
}