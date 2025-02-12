import ModeToggle from "components/ModeToggle";
import { Skeleton } from "components/ui/skeleton";

import "./App.css";

const App = () => {
    return (
        <div className="flex flex-col p-2 m-0 gap-4">
            <ModeToggle />
            <h1 data-testid="heading" className="text-3xl font-bold underline text-blue-600 align-text-top">
                Base configuration
            </h1>
            <p className="text-lg text-gray-600">Random component:</p>
            <Skeleton className="h-12 w-12 rounded-full" />
            <div className="space-y-2">
                <Skeleton className="h-4 w-[250px]" />
                <Skeleton className="h-4 w-[200px]" />
            </div>
            <footer className="mt-4 text-center border border-green-500">
                <p className="text-sm text-gray-600">
                    Built with ❤️ using Vite with React, React Router, Redux Query, TailwindCSS & shadcn/ui
                </p>
            </footer>
        </div>
    );
};

export default App;
