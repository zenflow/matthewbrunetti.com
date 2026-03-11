module.exports = {
  filters: {
    add: {
      role: {
        label: "Role",
        inputType: "select",
        def: null,
        choices: [
          { value: null, label: "" },
          ...["admin", "editor", "contributor", "guest"].map((value) => ({ value, label: value })),
        ],
      },
    },
  },
  columns: {
    add: {
      email: { label: "Email" },
      role: { label: "Role" },
    },
    order: ["title", "email", "role", "updatedAt"],
  },
};
