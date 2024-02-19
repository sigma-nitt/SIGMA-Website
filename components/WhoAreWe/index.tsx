"use client";
import { useState } from "react";


const WhoAreWe = () => {
    return (
        <div className="flex justify-between">
            {/* Left block */}
            <div className="text-center mx-auto max-w-lg p-8 border rounded-lg shadow-md" style={{ animation: 'slideInLeft 0.5s ease-out' }}>
                <h1 className="text-3xl font-bold mb-4">Who are we</h1>
                <p className="text-lg text-gray-700">
                Our club provides a platform where students can share a mutual interest in business and characteristic enthusiasm to succeed. We provide guidance replete with sufficient exposure and real-life projects.
                </p>
            </div>
            
            {/* Right block */}
            <div className="text-center mx-auto max-w-lg p-8 border rounded-lg shadow-md" style={{ animation: 'slideInRight 0.5s ease-out' }}>
                <h1 className="text-3xl font-bold mb-4">Who are we</h1>
                <p className="text-lg text-gray-700">
                Our club provides a platform where students can share a mutual interest in business and characteristic enthusiasm to succeed. We provide guidance replete with sufficient exposure and real-life projects.
                </p>
            </div>
        </div>
    );
};

export default WhoAreWe;