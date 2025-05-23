# Feedback Collector

## Overview

The Feedback Collector is a web-based application designed to gather and manage customer feedback. It allows customers to rate various aspects of a restaurant service, including customer service, beverage quality, restaurant cleanliness, and overall experience. This application is built using a **full-stack** approach, integrating **ReactJS** for the frontend and **PostgreSQL** as the database for storing the feedback.

## Technologies Used

- **Frontend**: 
  - ReactJS
  - HTML, CSS, JavaScript
  - Bootstrap for responsive design
  - Axios for API communication

- **Backend**:
  - Node.js
  - Express.js
  - PostgreSQL database
  
- **Other Tools**:
  - Git and GitHub for version control
  - Postman for API testing

## Features

1. **Customer Feedback Form**:
   - Collects customer name, email, phone, service quality, beverage quality, restaurant cleanliness, and overall experience.
   
2. **Backend**:
   - API routes to handle form submissions and store feedback in the PostgreSQL database.
   
3. **Database Schema**:
   - Feedback table stores the details for each customer response, including ratings for different aspects of the restaurant.
   - `id`, `customer_name`, `email`, `phone`, `service_quality`, `beverage_quality`, `restaurant_cleanliness`, and `overall_experience` columns.

4. **Responsive Design**:
   - The application is fully responsive, ensuring that users can submit their feedback on any device (desktop, tablet, mobile).

## Setup Instructions

### Prerequisites

Before running this application, make sure you have the following installed:

- **Node.js** (version 14 or higher)
- **PostgreSQL** for database setup

### Installing

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/Feedback-Collector.git
   cd Feedback-Collector
