import Image from "next/image";

export default function About() {
  return (
    <main className="min-h-screen" style={{backgroundColor: 'rgb(74, 72, 90)'}}>
      <section className="container mx-auto px-4 py-12 text-white">
        <div className="max-w-4xl mx-auto space-y-8">
          <h1 className="text-4xl font-bold mb-8">關於 Amia</h1>
          
          <p className="text-lg leading-relaxed">
            Amia 是一位充滿創意與活力的繪師，擅長以多變的畫風與鮮明的色彩呈現出獨特的角色魅力。從 2023 到 2024 年的年度總結圖表可以看出，Amia 的作品涵蓋了各種風格與主題，包括可愛、奇幻、暗黑、擬人化等，展現出極強的適應力與創造力。
          </p>

          <p className="text-lg leading-relaxed">
            Amia 擅長角色設計，筆下的人物擁有鮮明的個性與表情，無論是精緻的細節刻畫，還是充滿趣味的Q版風格，都能展現出角色的魅力。此外，Amia 善於運用紅色系與溫暖色調，使作品充滿情感與氛圍感。
          </p>

          <p className="text-lg leading-relaxed">
            在 2023 年的作品中，可以看到許多帶有故事性的角色，從可愛的獸人、華麗的幻想風格，到帶有黑暗元素的設計，展現出豐富的創意。而 2024 年的作品則延續這種多樣性，並在表現手法上更加靈活，嘗試更多不同風格的挑戰，從細膩的半寫實風格到簡潔的趣味插圖，皆展現出出色的技術。
          </p>

          <p className="text-lg leading-relaxed">
            總結來說，Amia 是一位充滿潛力的繪師，以多變的畫風、獨特的角色塑造與鮮明的色彩運用，創作出令人印象深刻的作品。無論是對於角色設計還是整體氛圍的掌握，都展現出極高的藝術價值與可塑性，值得持續關注與期待。
          </p>
        </div>
      </section>
    </main>
  );
}
