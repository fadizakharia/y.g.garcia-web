export default function getBookStatus(status: number) {
  switch (status) {
    case 0:
      return "Coming Soon";
    case 1:
      return "pre-order";
    case 2:
      return "Available";
  }
}
