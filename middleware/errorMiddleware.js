// Error handling middleware
const errorHandler = (err, req, res, next) => 
  {
    let statusCode = 
      err.statusCode || res.statusCode || 500; // Default to 500 if not set    
    res.status(statusCode).json({
      success: false,
      message: err.message,
    });
  };

module.exports = errorHandler;