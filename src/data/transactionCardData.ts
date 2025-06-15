export interface TransactionData {
  id: number;
  leftCountry: string;
  rightCountry: string;
  amount: string;
  transferAmount: string;
  date: string;
  description: string;
  flag: string;
  bankLogo: string;
  textColor: string;
}

export const TRANSACTION_DATA: TransactionData[] = [
  {
    id: 1,
    leftCountry: "Canada",
    rightCountry: "Nigeria",
    amount: "+C$750",
    transferAmount: "-₦862,912.94",
    date: "Yesterday, 1:28 AM",
    description: "Transfer to Lil Sis",
    flag: "/assets/images/canada.svg",
    bankLogo: "/assets/images/gtb.svg",
    textColor: "#FFFFFF",
  },
  {
    id: 2,
    leftCountry: "UK",
    rightCountry: "Ghana",
    amount: "+£500",
    transferAmount: "-₵3,450.00",
    date: "Today, 10:15 AM",
    description: "Monthly Support",
    flag: "/assets/images/uk.svg",
    bankLogo: "/assets/images/barclays.svg",
    textColor: "#FFFFFF",
  },
  {
    id: 3,
    leftCountry: "USA",
    rightCountry: "Kenya",
    amount: "+$1,200",
    transferAmount: "-KSh145,000.00",
    date: "2 days ago, 4:30 PM",
    description: "School Fees",
    flag: "/assets/images/usa.svg",
    bankLogo: "/assets/images/chase.svg",
    textColor: "#FFFFFF",
  },
  {
    id: 4,
    leftCountry: "Cad",
    rightCountry: "Kenya",
    amount: "+$1,200",
    transferAmount: "-KSh145,000.00",
    date: "2 days ago, 4:30 PM",
    description: "School Fees",
    flag: "/assets/images/usa.svg",
    bankLogo: "/assets/images/chase.svg",
    textColor: "#FFFFFF",
  },
];
