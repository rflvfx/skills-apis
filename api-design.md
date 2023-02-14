# API Design Guidelines

- Stateless endpoints, nouns in paths
- Pagination: ?page=1&limit=20 with X-Total-Count header
- Errors: { error: { code, message, details? } }
- Idempotency keys on POST where retries matter
