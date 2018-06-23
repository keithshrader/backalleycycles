const initialState = {
  invoices: {
    nextId: 4,
    invoices: [
      {
        id: 1,
        title: "Shrader",
        date: "1/1/2020",
        status: "Unpaid",
        total: 1159,
        items: [
          {
            text: "Bottom End Rebuild",
            price: 999
          },
          {
            text: "Custom Ape Hangers",
            price: 160
          }
        ],
        notes: "Thank you for your business!"
      },
      {
        id: 2,
        title: "Robinette",
        date: "5/1/2017",
        status: "Paid",
        total: 949,
        items: [
          {
            text: "Top End Rebuild",
            price: 699
          },
          {
            text: "Front/Rear Brake Service",
            price: 250
          }
        ],
        notes: "Payment due net-30."
      },
      {
        id: 3,
        title: "Uriarte",
        date: "5/10/2017",
        status: "Unpaid",
        total: 3180,
        items: [
          {
            text: "Custom Ape Hangers",
            price: 180
          },
          {
            text: "Springer Front End",
            price: 3000
          }
        ],
        notes: "Charge $10 per day for storage."
      }
    ]
  }
};
export default initialState;
