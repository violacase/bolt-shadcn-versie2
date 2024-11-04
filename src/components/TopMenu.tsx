import { NavigationMenu, NavigationMenuItem, NavigationMenuList, NavigationMenuTrigger, NavigationMenuContent, NavigationMenuLink } from "@/components/ui/navigation-menu";
import { MoonIcon, SunIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/ThemeProvider";
import { cn } from "@/lib/utils";
import { useLocation, useNavigate } from "react-router-dom";

const ListItem = ({ className, title, href, children }: { className?: string; title: string; href: string; children?: React.ReactNode }) => {
  const navigate = useNavigate();
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          href={href}
          onClick={(e) => {
            e.preventDefault();
            navigate(href);
          }}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          {children && <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>}
        </a>
      </NavigationMenuLink>
    </li>
  );
};

export function TopMenu() {
  const { theme, setTheme } = useTheme();
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div className="border-b">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <NavigationMenu>
            <NavigationMenuList className="gap-6">
              <NavigationMenuItem>
                <button
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-primary",
                    location.pathname === "/" ? "text-primary" : "text-muted-foreground"
                  )}
                  onClick={() => navigate("/")}
                >
                  Home
                </button>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <NavigationMenuTrigger
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-primary",
                    location.pathname.startsWith("/about") ? "text-primary" : "text-muted-foreground"
                  )}
                >
                  About
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[200px] gap-3 p-4">
                    <ListItem href="/about" title="Over ons">
                      Leer meer over ons bedrijf
                    </ListItem>
                    <ListItem href="/about/contact" title="Contact">
                      Neem contact met ons op
                    </ListItem>
                    <ListItem href="/about/medewerkers" title="Medewerkers">
                      Ontmoet ons team
                    </ListItem>
                    <ListItem href="/about/extra" title="Extra">
                      Aanvullende informatie
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <button
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-primary",
                    location.pathname === "/blog" ? "text-primary" : "text-muted-foreground"
                  )}
                  onClick={() => navigate("/blog")}
                >
                  Blog
                </button>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <button
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-primary",
                    location.pathname === "/gallery" ? "text-primary" : "text-muted-foreground"
                  )}
                  onClick={() => navigate("/gallery")}
                >
                  Gallery
                </button>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <button
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-primary",
                    location.pathname === "/items" ? "text-primary" : "text-muted-foreground"
                  )}
                  onClick={() => navigate("/items")}
                >
                  Items
                </button>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <button
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-primary",
                    location.pathname === "/fullgallery" ? "text-primary" : "text-muted-foreground"
                  )}
                  onClick={() => navigate("/fullgallery")}
                >
                  Full Gallery
                </button>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <button
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-primary",
                    location.pathname === "/yalightbox" ? "text-primary" : "text-muted-foreground"
                  )}
                  onClick={() => navigate("/yalightbox")}
                >
                  YA Lightbox
                </button>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <button
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-primary",
                    location.pathname === "/todos" ? "text-primary" : "text-muted-foreground"
                  )}
                  onClick={() => navigate("/todos")}
                >
                  Todos
                </button>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            {theme === "dark" ? (
              <SunIcon className="h-5 w-5" />
            ) : (
              <MoonIcon className="h-5 w-5" />
            )}
          </Button>
        </div>
      </div>
    </div>
  );
}