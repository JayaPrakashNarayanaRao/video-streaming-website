const videos = [
  {
    id: 1,
    thumbnail: "https://imgs.search.brave.com/j6bVwwo1cJpdpqyBU0ip9l3GjXSh6i_eRyLgt8f_Vvc/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuZnJlZWltYWdl/cy5jb20vaW1hZ2Vz/L2xhcmdlLXByZXZp/ZXdzLzYxMC9yYW5k/b20tMTU3NDM5MS5q/cGc_Zm10",
    duration: '14:20',
    title: 'Video Title is Represented in this area for  the sake of demonstration.',
    videoStatus: '3.4M views &#183; 6 months ago'
  },
  {
    id: 2,
    thumbnail: "https://imgs.search.brave.com/dJEAB8QrWg4eEoJDE6dofAPIeEXQMj0Bv5YFVCmuYMU/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTkx/NDA0MzI1Ni9waG90/by9pbWdfMTQ5OS1q/cGcud2VicD9iPTEm/cz0xNzA2NjdhJnc9/MCZrPTIwJmM9MERN/bVJXVzFWcEFxQUZR/RXRkbm1fb3RKbXNO/WkVOdTF4WmNMNUZ5/RF92Zz0",
    duration: '10:00',
    title: 'Video Title is Represented in this area for  the sake of demonstration.',
    videoStatus: '1M views &#183; 9 months ago'
  },
  {
    id: 3,
    thumbnail: "https://imgs.search.brave.com/UdYIJLQmHNh68eMF8F7cyhKK75HlPoWzVJnT4WPRq9U/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE1/MDg4MTc2MjgyOTQt/NWE0NTNmYTBiOGZi/P2ZtPWpwZyZ3PTMw/MDAmYXV0bz1mb3Jt/YXQmZml0PWNyb3Am/cT02MCZpeGxpYj1y/Yi00LjAuMyZpeGlk/PU0zd3hNakEzZkRC/OE1IeHpaV0Z5WTJo/OE1UaDhmSGRwYkdR/bE1qQmhibWx0WVd4/OFpXNThNSHg4TUh4/OGZEQT0.jpeg",
    duration: '01:00',
    title: 'Video Title is Represented in this area for  the sake of demonstration.',
    videoStatus: '4M views &#183; 1 months ago'
  },
  {
    id: 4,
    thumbnail: "https://imgs.search.brave.com/iSJ5z3b_NJKO96SrE6Sn4lnn0Q3ZP-Mj3VFtbVOg15g/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9h/bmltZS1jaGFyYWN0/ZXItdHJhdmVsaW5n/XzIzLTIxNTEyNzg4/MjIuanBnP3NpemU9/NjI2JmV4dD1qcGc",
    duration: '01:00',
    title: 'Video Title is Represented in this area for  the sake of demonstration.',
    videoStatus: '1M views &#183; 9 months ago'
  },
  {
    id: 5,
    thumbnail: "https://imgs.search.brave.com/8tWcgc2eJJBCde6V_t9LGHxtqHFF8tL9nIMZd4N3feY/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2M0L2Q4/LzY0L2M0ZDg2NDAw/YmVlZDMzNWI0YWM1/ODVhNTIyOWQwZDAx/LmpwZw",
    duration: '01:00',
    title: 'Video Title is Represented in this area for  the sake of demonstration.',
    videoStatus: '1M views &#183; 9 months ago'
  },
  {
    id: 6,
    thumbnail: "https://imgs.search.brave.com/rY7UhXrYmfDb3N0cUF9c2MJHvDUjiWe-lJ7SP-e1wdE/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2U2LzUz/Lzk2L2U2NTM5NjA3/MTlhMWU1MWFlZjdi/Y2Q2M2IwMzgwYjFj/LmpwZw",
    duration: '01:00',
    title: 'Video Title is Represented in this area for  the sake of demonstration.',
    videoStatus: '1M views &#183; 9 months ago'
  },
  {
    id: 7,
    thumbnail: "https://imgs.search.brave.com/Wml69eJaFZvkBXkRbS-R5ul02mVViGSlUxGRfZKa5Gw/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzk4LzU0/Lzc3Lzk4NTQ3NzRl/YTViYzdkMDUwYWZl/N2U1MDI4NjQwYzUz/LmpwZw",
    duration: '01:00',
    title: 'Video Title is Represented in this area for  the sake of demonstration.',
    videoStatus: '1M views &#183; 9 months ago'
  },
  {
    id: 8,
    thumbnail: "https://imgs.search.brave.com/wtknptDSv_4jSB_-KW7Qg-Pb70EzuPJidfbdPUW9CBs/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvaGQvYW5p/bWUtZ2lybC1waG9u/ZS1sYTdwZWRtMW55/aWtpYWhkLmpwZw",
    duration: '01:00',
    title: 'Video Title is Represented in this area for  the sake of demonstration.', 
    videoStatus: '1M views &#183; 9 months ago'
  },
  {
    id: 9,
    thumbnail: "https://imgs.search.brave.com/LcX6AEdNqHxpufL05spBeSSMnTP9h38NQJOxoA_a6l4/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAxNy8w/Mi8yMC8xOC8wMy9j/YXQtMjA4MzQ5Ml82/NDAuanBn",
    duration: '01:00',
    title: 'Video Title is Represented in this area for  the sake of demonstration.',
    videoStatus: '1M views &#183; 9 months ago'
  },
  {
    id: 10,
    thumbnail: "https://imgs.search.brave.com/PHlB4s184W8EW75Z_txe0B_-4ozSsdzOvfteWjLr8c8/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvZmVhdHVy/ZWQvY29vbC1waWN0/dXJlcy0xbjU5Ymti/aGM4bWlldWxxLmpw/Zw",
    duration: '01:00',
    title: 'Video Title is Represented in this area for  the sake of demonstration.',
    videoStatus: '1M views &#183; 9 months ago'
  },
  {
    id: 11,
    thumbnail: "https://imgs.search.brave.com/JUNQusSu1OI2Y4Ms_FoycTbs1QFJj2bSllD_Abfl15E/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdDMu/ZGVwb3NpdHBob3Rv/cy5jb20vMTI5ODIz/NzgvMTY2OTEvaS80/NTAvZGVwb3NpdHBo/b3Rvc18xNjY5MTEw/NjItc3RvY2stcGhv/dG8tc2Vuc3VhbC1j/b3VwbGUtaW4tbG92/ZS5qcGc",
    duration: '01:00',
    title: 'Video Title is Represented in this area for  the sake of demonstration.',
    videoStatus: '1M views &#183; 9 months ago'
  }
];