import React, { useEffect, useRef } from "react";
import Quagga from "quagga";

const BarcodeScanner = ({ onDetected }) => {
    const videoRef = useRef(null);

    useEffect(() => {
        Quagga.init({
            inputStream: {
                type: "LiveStream",
                constraints: {
                    width: 640,
                    height: 480,
                    facingMode: "environment" // Use rear camera
                },
                target: videoRef.current
            },
            decoder: {
                readers: ["code_128_reader", "ean_reader", "ean_8_reader", "upc_reader"]
            }
        }, (err) => {
            if (err) {
                console.error("Error initializing Quagga:", err);
                return;
            }
            Quagga.start();
        });

        Quagga.onDetected((data) => {
            if (onDetected) {
                onDetected(data.codeResult.code);
            }
            Quagga.stop();
        });

        return () => {
            Quagga.stop();
        };
    }, [onDetected]);

    return (
        <div className="flex justify-center items-center h-screen bg-gray-900">
            <div ref={videoRef} className="w-[80%] max-w-[640px] h-[480px] bg-black relative">
                {/* The video feed will be inside this container */}
            </div>
        </div>
    );
};

export default BarcodeScanner;