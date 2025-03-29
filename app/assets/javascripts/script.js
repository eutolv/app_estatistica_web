import { Controller } from "@hotwired/stimulus";
import Chart from "chart.js/auto";

export default class extends Controller {
  static targets = ["table", "results", "chart", "decimalPlaces"];

  connect() {
    this.chartInstance = null;
  }

  addRow() {
    let row = this.tableTarget.insertRow();
    row.innerHTML = `
      <td><input type="number" class="form-control xi"></td>
      <td><input type="number" class="form-control fi"></td>
      <td><button class="btn btn-danger btn-sm" data-action="click->statistics#removeRow">Remover</button></td>
    `;
  }

  removeRow(event) {
    event.target.closest("tr").remove();
  }

  async calculate() {
    let data = Array.from(this.tableTarget.querySelectorAll("tr"))
      .map(row => {
        let xi = parseFloat(row.querySelector(".xi")?.value);
        let fi = parseInt(row.querySelector(".fi")?.value);
        // Verifica se xi e fi são números válidos e não vazios
        if (isNaN(xi) || isNaN(fi) || xi === "" || fi === "") return null;
        return { xi, fi };
      })
      .filter(Boolean);

    // Verifica se os dados não estão vazios
    if (data.length === 0) {
      this.resultsTarget.innerHTML = "Preencha os campos corretamente.";
      return;
    }

    try {
      // Envia os dados para o servidor e espera o retorno
      let response = await fetch("/calculate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ data })
      });

      // Verifica se a resposta foi bem-sucedida
      if (!response.ok) {
        throw new Error("Erro ao calcular os resultados.");
      }

      let result = await response.json();

      // Atualiza os resultados no frontend
      this.resultsTarget.innerHTML = `
        <p><strong>Média:</strong> ${result.mean.toFixed(2)}</p>
        <p><strong>Moda:</strong> ${result.mode}</p>
        <p><strong>Mediana:</strong> ${result.median}</p>
        <p><strong>Variância:</strong> ${result.variance.toFixed(2)}</p>
        <p><strong>Desvio Padrão:</strong> ${result.standard_deviation.toFixed(2)}</p>
        <p><strong>CV:</strong> ${result.cv.toFixed(2)}%</p>
      `;
      
      // Renderiza o gráfico
      this.renderChart(data);
    } catch (error) {
      this.resultsTarget.innerHTML = `Erro: ${error.message}`;
    }
  }

  renderChart(data) {
    // Destrói o gráfico anterior, se existir
    if (this.chartInstance) this.chartInstance.destroy();

    // Cria um novo gráfico
    this.chartInstance = new Chart(this.chartTarget, {
      type: "bar",
      data: {
        labels: data.map(d => d.xi),
        datasets: [{ label: "Frequência", data: data.map(d => d.fi), backgroundColor: "blue" }]
      }
    });
  }
}
