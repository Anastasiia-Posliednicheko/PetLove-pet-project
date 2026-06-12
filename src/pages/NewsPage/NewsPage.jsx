import { useState, useEffect } from "react";
import Title from "../../components/Title/Title.jsx";
import { fetchNews } from "../../api/axiosInstance.js";
import SearchField from "../../components/SearchField/SearchField.jsx";

export default function NewsPage() {
  const [news, setNews] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [keyword, setKeyword] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getNews = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await fetchNews({
          keyword,
          page,
          limit: 6,
        });
        setNews(data.results);
        setTotalPages(data.totalPages);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    getNews();
  }, [keyword, page]);

  const handlePrevPage = () => {
    setPage(page - 1);
  };

  const handleNextPage = () => {
    setPage(page + 1);
  };
  const handleSearch = (value) => {
    setKeyword(value);
    setPage(1);
  };

  return (
    <section>
      <Title>News</Title>
      <SearchField onSubmit={handleSearch} />

      {isLoading && <p>Loading...</p>}
      {error && <p>{error} </p>}
      <ul>
        {news.map((item) => (
          <li key={item.id}>
            <img src={item.imgUrl} alt={item.title} width="300" />
            <h2>{item.title}</h2>
            <p>{item.text}</p>
            <p>{new Date(item.date).toLocaleDateString("uk-UA")}</p>
            <a href={item.url} target="_blank" rel="noopener noreferrer">
              Read more
            </a>
          </li>
        ))}
      </ul>
      <button disabled={page === 1} onClick={handlePrevPage}>
        Prev
      </button>
      <span>
        {page} / {totalPages}
      </span>
      <button disabled={page === totalPages} onClick={handleNextPage}>
        Next
      </button>
    </section>
  );
}
