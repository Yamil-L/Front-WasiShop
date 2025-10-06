# Usa una imagen base de Node compatible con Angular moderno
FROM node:22

# Crea el directorio de trabajo dentro del contenedor
WORKDIR /usr/src/app

# Copia los archivos de dependencias primero (para aprovechar la cache)
COPY package*.json ./

# Instala dependencias del proyecto
RUN npm install -g @angular/cli && npm install

# Copia el resto del código fuente al contenedor
COPY . .

# Expone el puerto donde Angular servirá la app
EXPOSE 4200

# Comando por defecto: ejecutar ng serve en modo desarrollo
CMD ["ng", "serve", "--host", "0.0.0.0", "--port", "4200"]
