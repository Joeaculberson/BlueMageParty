public class ApiKeyMiddleware
{
    private readonly RequestDelegate _next;
    private readonly string _apiKey;

    public ApiKeyMiddleware(RequestDelegate next, IConfiguration configuration)
    {
        _next = next;
        _apiKey = configuration["VITE_API_KEY"]; // Read the API key from configuration
    }

    public async Task InvokeAsync(HttpContext context)
    {
        // Check if the request contains the API key in the headers
        if (!context.Request.Headers.TryGetValue("X-API-KEY", out var extractedApiKey) || extractedApiKey != _apiKey)
        {
            context.Response.StatusCode = StatusCodes.Status401Unauthorized;
            await context.Response.WriteAsync("Unauthorized: Invalid API Key");
            return;
        }

        // If the API key is valid, proceed to the next middleware
        await _next(context);
    }
}