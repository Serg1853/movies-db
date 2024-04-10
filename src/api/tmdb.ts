async function get(relativeUrl: string) {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MDc1YTZkMDQ0NTMxMGNhMTI5NDlhYzA0MTBlNDllMCIsInN1YiI6IjY2MTZjZGZmODU4Njc4MDE0YWM2MjViYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._BYRtOTDR3rksCvRNLC0FpEehVfHBr-77Lg5pLJjXZQ",
    },
  };

  const response = await fetch(
    `https://api.themoviedb.org/3${relativeUrl}`,
    options
  );
  const json = response.json();
  return json;
}

export const client = {
  async getNowPlaying() {
    return await get("/movie/now_playing?page=1");
  },
};
