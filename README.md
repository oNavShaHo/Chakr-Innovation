Design
![documents](https://github.com/oNavShaHo/Chakr-Innovation/assets/106837111/bbe5c4a0-e6f1-4bda-963d-09da689f396c)



# Next.js Full Stack App with Downsampled Data Visualization

This is a full-stack web application built with Next.js, Tailwind CSS, and Material-UI, showcasing data visualization of a downsampled dataset. The backend of the application, developed using Next.js, downsampled a dataset containing 69,000 records by applying the mean method, aggregating data on a yearly basis. The downsampled data is then passed to the frontend, where it is visualized using a line chart from Material-UI.

## Features

- **Full Stack:** Utilizes Next.js for both frontend and backend development, providing a seamless full-stack experience.

- **Tailwind CSS:** The frontend is styled using Tailwind CSS, offering a utility-first CSS framework for a clean and responsive design.

- **Data Downsampling:** The backend employs the mean method to downsample a large dataset (69,000 records) into yearly aggregates.

- **Material-UI Chart:** The downsampled data is visualized on the frontend using a line chart from Material-UI, providing an interactive and aesthetically pleasing representation.

## Getting Started

Follow these steps to run the project locally:

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/your-username/your-nextjs-project.git
   cd your-nextjs-project
   ```

2. **Install Dependencies:**
   ```bash
   npm install
   ```

3. **Run the Development Server:**
   ```bash
   npm run dev
   ```

   The application will be accessible at [http://localhost:3000](http://localhost:3000).

## Project Structure

- **`/app`:** Contains Next.js pages, representing different routes in the application.
- **`/components`:** Holds React components used throughout the application.
- **`app/api`:** Houses backend API routes, where data downsampling is performed.

## Technologies Used

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Material-UI](https://mui.com/)

## Contributing

Contributions are welcome! If you have any suggestions or find any issues, please feel free to open an issue or create a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

---

Feel free to customize this README according to your project's specifics and add more sections if needed.
