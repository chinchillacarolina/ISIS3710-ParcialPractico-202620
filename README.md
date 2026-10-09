# ISIS3710-ParcialPractico-202620
# Carolina Chinchilla
# 202011842



| # | Ubicacion  | herramienta | Regla Incumplida | Por qué es un problema | Correcion |
|---|---|---|---|---|---|
|1-Inicia Sesion|login-page.tsx- linea 52 y 39|lighthouse|Form elements do not have associated labels|No permite identificar su id| htmlFor="email" htmlFor="password"|
|2-Inicia sesion|layout.tsx linea 29|lighthouse|html element does not have a [lang] attribute|No permite darle el identificador de en que idioma esta la página|Agregar lang=es|
|3-Inicia Sesion|layout.tsx linea 34|lighthouse|Document does not have a main landmark|--- <main className="flex-1 flex flex-col">{children}</main>|
|4-Registrarse|register-page.tsx lineas:43,57,70,83|lighthouse|Form elements do not have associated labels|No permite identificar su id|completar asi: htmlFor="email"|
|5-Pagina pricipal|plan/page.tsx linea 37 y 19|lighthouse|Background and foreground colors do not have a sufficient contrast ratio| las paginas deben tenr suficiente contraste entre para evitar monotonia y atraer al usuario|<p className="text-slate-600">°


#Crearplan
| # | Ubicacion  | herramienta | Regla Incumplida | Por qué es un problema | Correcion |
|1||new-page.tsx linea 116 y 131|lighthouse|Form elements do not have associated label-|No permite identificar su id| htmlFor="adrres" htmlFor="stimatedprice"|
|2|new-page.tsx linea 71|lighthpuse|aria hidden scrolable elements|no permite observar los elementos|aria-hidden="false"|