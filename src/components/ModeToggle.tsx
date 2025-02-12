import { Button } from "components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "components/ui/dropdown-menu";
import { Moon, Sun } from "lucide-react";
import { useEffect } from "react";

/**
 * ModeToggle component provides a dropdown menu to switch between light and dark themes.
 * It uses the `useTheme` hook to access and set the current theme.
 *
 * @component
 * @example
 *
 * <ModeToggle />
 *
 * @returns {JSX.Element} A dropdown menu with options to toggle between light and dark themes.
 */
const ModeToggle = () => {
    const setTheme = (theme: string) => {
        localStorage.setItem("shadcn-ui-theme", theme);
        window.document.documentElement.classList.remove("light", "dark");
        window.document.documentElement.classList.add(theme);
    };

    useEffect(() => {
        const savedTheme = localStorage.getItem("shadcn-ui-theme") || "light";
        setTheme(savedTheme);
    }, []);

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon">
                    <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                    <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                    <span className="sr-only">Toggle theme</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-32 bg-">
                <DropdownMenuItem onClick={() => setTheme("light")}>Light</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("dark")}>Dark</DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default ModeToggle;
