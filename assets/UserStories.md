# User Stories M3

## Actores
- Usuarios logueados  
- Usuarios anónimos  

## Reglas del negocio
- Solo un usuario logueado puede agendar un turno.  
- Los turnos deben ser agendados siempre dentro del horario de atención del establecimiento.  
- Los turnos pueden ser cancelados hasta un día antes de la fecha del turno.  

---

## 🔹 Historia de Usuario ID: **Registrar usuario**

### 🧾 Título
Como **Usuario anónimo**  
Quiero **registrarme**  
Para poder **agendar un turno**  

### 📜 Reglas de negocio
- Solo un usuario registrado y logueado puede agendar un turno.  

### ✅ Criterios de aceptación
- **Escenario 1: Registro exitoso**  
  **Dado** los datos de credencial nueva: usuario, contraseña y datos básicos de contacto  
  **Cuando** el usuario anónimo ingresa las credenciales nuevas y presiona “registrar”  
  **Entonces** el sistema guarda las nuevas credenciales y muestra un mensaje indicando que el registro fue exitoso.  

- **Escenario 2: Registro fallido por usuario ya registrado**  
  **Dado** los datos de credencial donde el usuario ya existe en el sistema  
  **Cuando** el usuario anónimo ingresa las credenciales duplicadas y presiona “registrar”  
  **Entonces** el sistema muestra un mensaje de error indicando que el usuario ya existe y no permite completar el registro.  

- **Escenario 3: Registro fallido por campos incompletos**  
  **Dado** los datos de credencial incompletos  
  **Cuando** el usuario anónimo ingresa las credenciales incompletas y presiona “registrar”  
  **Entonces** el sistema muestra un mensaje de error indicando campos incompletos y no permite completar el registro.  

---

## 🔹 Historia de Usuario ID: **Loguear usuario**

### 🧾 Título
Como **Usuario**  
Quiero **loguearme**  
Para poder **agendar un turno**  

### 📜 Reglas de negocio
- Solo un usuario registrado y logueado puede agendar un turno.  

### ✅ Criterios de aceptación
- **Escenario 1: Logueo exitoso**  
  **Dado** las credenciales existentes y válidas: usuario y contraseña  
  **Cuando** el usuario registrado ingresa las credenciales y presiona “login”  
  **Entonces** el sistema valida el login del usuario y muestra un mensaje de login exitoso.  

- **Escenario 2: Logueo fallido por usuario inexistente**  
  **Dado** las credenciales inexistentes: usuario  
  **Cuando** el usuario ingresa las credenciales y presiona “login”  
  **Entonces** el sistema muestra un mensaje de error indicando que el usuario no está registrado y no permite loguear al usuario.  

- **Escenario 3: Logueo fallido por campos incompletos**  
  **Dado** las credenciales incompletas  
  **Cuando** el usuario ingresa las credenciales y presiona “login”  
  **Entonces** el sistema muestra un mensaje de error indicando campos incompletos en las credenciales y no permite loguear al usuario.  

---

## 🔹 Historia de Usuario ID: **Agendar turno**

### 🧾 Título
Como **Usuario logueado**  
Quiero **agendar un turno**  
Para poder **reservar un horario de atención**  

### 📜 Reglas de negocio
- Los turnos deben ser agendados dentro del horario de atención establecido.  

### ✅ Criterios de aceptación
- **Escenario 1: Turno agendado exitoso**  
  **Dado** una fecha y horario válido seleccionado  
  **Cuando** el usuario logueado ingresa la fecha y horario y presione “reservar”  
  **Entonces** el sistema crea la reserva y muestra un mensaje de reserva exitosa, y envía un correo con la reserva al usuario.  

- **Escenario 2: Turno agendado fallido por horario inválido**  
  **Dado** un horario fuera del horario de atención en la semana  
  **Cuando** el usuario logueado ingresa la fecha y horario y presione “reservar”  
  **Entonces** el sistema muestra un mensaje de error indicando que debe elegirse un horario válido dentro del horario de atención y no permite realizar la reserva.  

- **Escenario 3: Turno agendado fallido por fecha inválida**  
  **Dado** una fecha previa o igual a la actual  
  **Cuando** el usuario logueado ingresa la fecha y horario y presione “reservar”  
  **Entonces** el sistema muestra un mensaje de error indicando que debe elegirse posterior a la actual y no permite realizar la reserva.  

---

## 🔹 Historia de Usuario ID: **Cancelar turno**

### 🧾 Título
Como **Usuario logueado**  
Quiero **cancelar un turno**  
Para poder **liberar la agenda**  

### 📜 Reglas de negocio
- Los turnos pueden ser cancelados hasta un día antes de la fecha del turno.  

### ✅ Criterios de aceptación
- **Escenario 1: Cancelación exitosa**  
  **Dado** que la fecha del turno es posterior a la fecha actual  
  **Cuando** el usuario presiona “cancelar”  
  **Entonces** el sistema elimina la reserva y muestra un mensaje indicando que fue cancelada con éxito.  

- **Escenario 2: Cancelación fallida por fecha del turno igual a la actual**  
  **Dado** que la fecha del turno es igual a la fecha actual  
  **Cuando** el usuario presiona “cancelar”  
  **Entonces** el sistema muestra un mensaje de error indicando que no puede cancelarse un turno con fecha actual y no permite la cancelación.  

---
