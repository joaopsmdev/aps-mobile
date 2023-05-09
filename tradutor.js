export default function traduzirDescricao(descricao) {
  switch (descricao) {
    case "clear sky":
      return "céu limpo";
    case "few clouds":
      return "poucas nuvens";
    case "scattered clouds":
      return "nuvens esparsas";
    case "broken clouds":
      return "nuvens quebradas";
    case "overcast clouds":
      return "nuvens carregadas";
    case "light rain":
      return "chuva leve";
    case "moderate rain":
      return "chuva moderada";
    case "heavy intensity rain":
      return "chuva forte";
    case "very heavy rain":
      return "chuva muito forte";
    case "extreme rain":
      return "chuva extrema";
    case "freezing rain":
      return "chuva congelante";
    case "light intensity shower rain":
      return "chuva de intensidade leve";
    case "shower rain":
      return "chuva";
    case "unknown":
      return "desconhecido";
    case "heavy intensity shower rain":
      return "chuva de intensidade forte";
    case "ragged shower rain":
      return "chuva irregular";
    case "light snow":
      return "neve leve";
    case "Snow":
      return "neve";
    case "heavy snow":
      return "neve forte";
    case "sleet":
      return "saraiva";
    case "shower sleet":
      return "saraiva intensa";
    case "light rain and snow":
      return "chuva e neve leve";
    case "Rain and snow":
      return "chuva e neve";
    case "light shower snow":
      return "neve fraca";
    case "Shower snow":
      return "neve";
    case "Heavy shower snow":
      return "neve forte";
    case "mist":
      return "névoa";
    case "smoke":
      return "fumaça";
    case "haze":
      return "neblina seca";
    case "sand/ dust whirls":
      return "redemoinhos de areia/poeira";
    case "fog":
      return "nevoeiro";
    case "sand":
      return "areia";
    case "dust":
      return "poeira";
    case "volcanic ash":
      return "cinzas vulcânicas";
    case "squalls":
      return "rajadas de vento";
    case "tornado":
      return "tornado";
    default:
      return descricao;
  }
}
