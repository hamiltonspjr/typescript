/**
 * geralmente usamos o Extract e Exclude em tipos literais
 * Extract funciona para extrair tipos de uma união de tipos
 */

// Extract<Type, Union>
type AppEvents = "click" | "hover" | "scroll" | "resize";
type MarketingEvents = Extract<AppEvents, "click" | "scroll">;

const event: MarketingEvents = "click";

// Exclude<Type, ExcludedMembers>
type UserRoles = "admin" | "editor" | "viewer" | "guest";
type ViewCommentsRoles = Exclude<UserRoles, "guest">;
