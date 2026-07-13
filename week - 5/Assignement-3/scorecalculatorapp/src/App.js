import CalculateScore from "./Components/CalculateScore";

function App() {
    return (
        <div>
            <CalculateScore
                Name="John"
                School="ABC School"
                total={450}
                goal={500}
            />
        </div>
    );
}

export default App;