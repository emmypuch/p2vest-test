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
    leftCountry: "Canada",
    rightCountry: "Ghana",
    amount: "+C$3,920",
    transferAmount: "-₵4,440.11",
    date: "Today, 9:45 AM",
    description: "Online Transaction",
    flag: "/assets/images/ghana.svg",
    bankLogo: "/assets/images/absa.svg",
    textColor: "#FFFFFF",
  },
  {
    id: 3,
    leftCountry: "Nigeria",
    rightCountry: "Ghana",
    amount: "-₦98,000",
    transferAmount: "-₵760.87",
    date: "Today, 11:28 AM",
    description: "Paid at KYC",
    flag: "/assets/images/nigeria.svg",
    bankLogo: "/assets/images/kyc.svg",
    textColor: "#FFFFFF",
  },
  {
    id: 4,
    leftCountry: "Nigeria",
    rightCountry: "Nigeria",
    amount: "-₦17,000",  
    transferAmount: "+₦17,000",
    date: "Today, 3:15 PM",
    description: "Airtime top-up",
    flag: "/assets/images/nigeria.svg",
    bankLogo: "/assets/images/mtn.svg",
    textColor: "#FFFFFF",
  },
];
