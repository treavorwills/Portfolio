import React from "react";

export default function AboutCard(props) {
    return (
        <div class="flex flex-wrap mx-auto">
        {props.aboutItems.map(item => (
        <div className="p-4 shadow-md lg:max-w-lg mx-5">
            <div className="space-y-2">
                <h3 className="text-2xl font-semibold">
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