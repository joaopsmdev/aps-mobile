//Teste de unidade
import traduzirDescricao from "../tradutor.js";

describe("traduzirDescricao", () => {
  it("deve traduzir 'clear sky' para 'céu limpo'", () => {
    const descricao = "clear sky";
    const resultado = traduzirDescricao(descricao);
    expect(resultado).toBe("céu limpo");
  });

  it("deve traduzir 'few clouds' para 'poucas nuvens'", () => {
    const descricao = "few clouds";
    const resultado = traduzirDescricao(descricao);
    expect(resultado).toBe("poucas nuvens");
  });

  it("deve traduzir 'light rain' para 'chuva leve'", () => {
    const descricao = "light rain";
    const resultado = traduzirDescricao(descricao);
    expect(resultado).toBe("chuva leve");
  });

  it("deve retornar 'desconhecido' para descrição não reconhecida", () => {
    const descricao = "unknown";
    const resultado = traduzirDescricao(descricao);
    expect(resultado).toBe("desconhecido");
  });
});
