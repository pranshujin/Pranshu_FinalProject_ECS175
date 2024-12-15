import React, { useState } from "react";
import Controls from "./components/Controls";
import Waterfall from "./components/Waterfall";
import "./App.css";

const App = () => {
    const [flowRate, setFlowRate] = useState(500);
    const [size, setSize] = useState(5);
    const [particleSpeed, setParticleSpeed] = useState(0.01);
    const [widthFactor, setWidthFactor] = useState(1);
    const [transparency, setTransparency] = useState(0.7); // New Transparency State

    return (
        <div className="App">
            <div className="visualization">
                <div className="side-text">
                    <h1>Waterfall Simulation</h1>
                    <p>
                        Adjust the controls below to see how flow rate, size, speed, 
                        width, and transparency affect the waterfall simulation.
                    </p>
                    <p><b>Fun Fact:</b> The tallest waterfall in the world is Angel Falls in Venezuela, at over 3,200 feet!</p>
                </div>
                <Waterfall
                    flowRate={flowRate}
                    size={size}
                    particleSpeed={particleSpeed}
                    widthFactor={widthFactor}
                    transparency={transparency} // Pass transparency to Waterfall
                />
            </div>
            <div className="controls-panel">
                <Controls
                    onFlowRateChange={setFlowRate}
                    onSizeChange={setSize}
                    onSpeedChange={setParticleSpeed}
                    onWidthChange={setWidthFactor}
                    onTransparencyChange={setTransparency} // Add this handler
                />
            </div>
        </div>
    );
};

export default App;
