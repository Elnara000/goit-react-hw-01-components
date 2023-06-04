export default async function getRandomHexColor() {
    return await `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
  }

