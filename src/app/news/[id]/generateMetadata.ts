import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  // Пытаемся получить данные новости
  try {
    const response = await fetch(
      `https://rosscargo.kg/api/services/${params.id}`,
      { next: { revalidate: 3600 } }
    );
    
    if (!response.ok) {
      return {
        title: "Новость | Росскарго",
        description: "Новость логистической компании Росскарго.",
      };
    }
    
    const newsItem = await response.json();
    
    // Получаем путь к изображению
    const imagePath = newsItem.imagePath 
      ? `https://rosscargo.kg/api/uploads/${newsItem.imagePath}`
      : "https://rosscargo.kg/vehicle-road 1.png";
    
    return {
      title: `${newsItem.header_title} | Росскарго`,
      description: newsItem.header_body || "Новость логистической компании Росскарго.",
      openGraph: {
        title: newsItem.header_title,
        description: newsItem.header_body,
        type: "article",
        publishedTime: new Date().toISOString(),
        url: `https://rosscargo.kg/news/${params.id}`,
        images: [
          {
            url: imagePath,
            alt: newsItem.header_title,
          },
        ],
      },
    };
  } catch (error) {
    console.error("Ошибка при получении метаданных:", error);
    return {
      title: "Новость | Росскарго",
      description: "Новость логистической компании Росскарго.",
    };
  }
} 