export default class FetchClient {
    private static readonly BASE_URL = 'http://26.200.223.0:4444';

    static async request<T, R = any, D = any > (method: string, url: string, data ?: D, config ?: any,): Promise < R > {
        try {
            const headers = {
                'Content-Type': typeof data === 'object' && !(data instanceof FormData) ? 'application/json' : undefined,
                ...config?.headers
            };

            const body = typeof data === 'object' && !(data instanceof FormData)
                ? JSON.stringify(data)
                : data;

            const response = await fetch(`${this.BASE_URL}${url}`, {
                ...config,
                method,
                headers,
                body,
            });

            const json = await response.json();
            return json as R;
        } catch(error) {
            throw error;
        }
    }

    static async get<T = any, R = any, D = any > (url: string, data ?: D, config ?: any,): Promise < R > {
        return this.request<T, R, D>('GET', url, data, config);
    }

    static async post<T = any, R = any, D = any > (url: string, data ?: D, config ?: any,): Promise < R > {
        return this.request<T, R, D>('POST', url, data, config);
    }
}


