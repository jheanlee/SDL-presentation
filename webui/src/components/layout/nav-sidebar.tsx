import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar.tsx";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible.tsx";
import { ChevronDown, Globe } from "lucide-react";
import { useTranslation } from "react-i18next";
import { paths } from "@/config/paths.ts";
import { NavLink } from "react-router";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu.tsx";
import { Button } from "@/components/ui/button.tsx";
import ToggleThemeButton from "@/components/theme/toggle-theme.tsx";

export const NavSidebar = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className="hidden max-md:block">
      <Sidebar collapsible="offcanvas">
        <SidebarHeader>{/* TODO: Icon */}</SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem key="home">
                  <SidebarMenuButton asChild>
                    <NavLink to={paths.root.home.getHref()}>
                      {t("navbar.home")}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
          <Collapsible defaultOpen className="group/collapsible">
            <SidebarGroup>
              <SidebarGroupLabel asChild>
                <CollapsibleTrigger>
                  {t("navbar.outcome_exhibition.exhibition")}
                  <ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
                </CollapsibleTrigger>
              </SidebarGroupLabel>
              <SidebarGroupContent>
                <CollapsibleContent>
                  <SidebarMenuItem key="presentation">
                    <SidebarMenuButton asChild>
                      <NavLink to={paths.root.presentation.getHref()}>
                        {t("navbar.outcome_exhibition.presentation")}
                      </NavLink>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem key="booth">
                    <SidebarMenuButton asChild>
                      <NavLink to={paths.root.booth.getHref()}>
                        {t("navbar.outcome_exhibition.booth")}
                      </NavLink>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem key="poster">
                    <SidebarMenuButton asChild>
                      <NavLink to={paths.root.booth.getHref()}>
                        {t("navbar.outcome_exhibition.poster")}
                      </NavLink>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </CollapsibleContent>
              </SidebarGroupContent>
            </SidebarGroup>
          </Collapsible>
          <Collapsible defaultOpen className="group/collapsible">
            <SidebarGroup>
              <SidebarGroupLabel asChild>
                <CollapsibleTrigger>
                  {t("navbar.outcome_exhibition.all_works")}
                  <ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
                </CollapsibleTrigger>
              </SidebarGroupLabel>
              <SidebarGroupContent>
                <CollapsibleContent>
                  <SidebarMenuItem key="society">
                    <SidebarMenuButton asChild>
                      <NavLink to={paths.root.works.society.getHref()}>
                        {t("navbar.outcome_exhibition.society")}
                      </NavLink>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem key="politics_and_economics">
                    <SidebarMenuButton asChild>
                      <NavLink
                        to={paths.root.works.politics_and_economics.getHref()}
                      >
                        {t("navbar.outcome_exhibition.politics_and_economics")}
                      </NavLink>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem key="engineering">
                    <SidebarMenuButton asChild>
                      <NavLink to={paths.root.works.engineering.getHref()}>
                        {t("navbar.outcome_exhibition.engineering")}
                      </NavLink>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem key="chemistry">
                    <SidebarMenuButton asChild>
                      <NavLink to={paths.root.works.chemistry.getHref()}>
                        {t("navbar.outcome_exhibition.chemistry")}
                      </NavLink>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem key="medicine">
                    <SidebarMenuButton asChild>
                      <NavLink to={paths.root.works.medicine.getHref()}>
                        {t("navbar.outcome_exhibition.medicine")}
                      </NavLink>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem key="biology">
                    <SidebarMenuButton asChild>
                      <NavLink to={paths.root.works.biology.getHref()}>
                        {t("navbar.outcome_exhibition.biology")}
                      </NavLink>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </CollapsibleContent>
              </SidebarGroupContent>
            </SidebarGroup>
          </Collapsible>
          <SidebarGroup>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem key="resources">
                  <SidebarMenuButton asChild>
                    <NavLink to={paths.root.resources.getHref()}>
                      {t("navbar.resources")}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem key="about">
                  <SidebarMenuButton asChild>
                    <NavLink to={paths.root.about.getHref()}>
                      {t("navbar.about_outcome_exhibition")}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem key="staff_list">
                  <SidebarMenuButton asChild>
                    <NavLink to={paths.root.staff.getHref()}>
                      {t("navbar.staff_list")}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter>
          <SidebarMenu>
            <SidebarMenuItem>
              <div className="w-full flex justify-between align-middle gap-2">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost">
                      <Globe />
                      <p>Language</p>
                      <ChevronDown />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuGroup>
                      <DropdownMenuItem
                        onSelect={() => {
                          (async () => await i18n.changeLanguage("zh-Hant"))();
                        }}
                      >
                        繁體中文
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        onSelect={() => {
                          (async () => await i18n.changeLanguage("en"))();
                        }}
                      >
                        English
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        onSelect={() => {
                          (async () => await i18n.changeLanguage("ja"))();
                        }}
                      >
                        日本語
                      </DropdownMenuItem>
                    </DropdownMenuGroup>
                  </DropdownMenuContent>
                </DropdownMenu>

                <ToggleThemeButton />
              </div>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarFooter>
      </Sidebar>
    </div>
  );
};
