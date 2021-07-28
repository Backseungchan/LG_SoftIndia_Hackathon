import { useState, useEffect } from "react";
import { w3cwebsocket as W3CWebSocket } from "websocket";

const Test = () => {
    const [result, setResult] = useState("Back");

    useEffect(() => {
        var client = new W3CWebSocket('ws://220.66.217.52:9998');

        client.onerror = function() {
            console.log('Connection Error');
        };

        client.onopen = function() {
            console.log('Client Connected');
        };

        client.onclose = function() {
            console.log('Client Closed');
        };

        client.onmessage = function(e) {
            setResult(e.data);
        };
    }, []);

    return (
        <div>
            <h1>{result}</h1>
        </div>
    )
}

export default Test;