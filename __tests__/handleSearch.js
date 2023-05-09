// Teste de Integração

import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import axios from "axios";
import App from "../App";

jest.mock("axios");

describe("App", () => {
  test("deve buscar e exibir dados climáticos corretamente", async () => {
    const mockData = {
      name: "São Paulo",
      sys: { country: "BR" },
      main: { temp: 25, feels_like: 28 },
      weather: [{ description: "clear sky" }],
    };

    axios.get.mockResolvedValueOnce({ data: mockData });

    render(<App />);

    const cityInput = screen.getByPlaceholderText("Digite o nome da cidade");
    const searchButton = screen.getByText("Pesquisar");

    fireEvent.change(cityInput, { target: { value: "São Paulo" } });
    fireEvent.click(searchButton);

    await waitFor(() => {
      const cityName = screen.getByText("Cidade: São Paulo");
      const countryName = screen.getByText("País: BR");
      const temperature = screen.getByText("Temperatura: 25°C");
      const feelsLike = screen.getByText("Sensação Térmica: 28°C");
      const weather = screen.getByText("Tempo: céu limpo");

      expect(cityName).toBeInTheDocument();
      expect(countryName).toBeInTheDocument();
      expect(temperature).toBeInTheDocument();
      expect(feelsLike).toBeInTheDocument();
      expect(weather).toBeInTheDocument();
    });
  });
});
