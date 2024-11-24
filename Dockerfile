# Use an official Nginx image as the base image
FROM nginx:alpine

# Copy the HTML files to the Nginx server directory
COPY . /usr/share/nginx/html/

# Expose port 80
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]