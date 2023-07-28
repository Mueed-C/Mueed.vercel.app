export const metadata = (rblog, ogUrl) => ({
  // Metadata
  title: `Mueed - ${rblog.title}`,
  description: rblog.desc,

  // Meta Tags for Open Graph
  og: {
    title: rblog.title,
    description: rblog.desc,
    image: rblog.coverImage,
    url: ogUrl,
  },

  // Meta Tags for Twitter Card
  twitter: {
    card: "summary",
    title: rblog.title,
    description: rblog.desc,
    image: rblog.coverImage,
  },
});
