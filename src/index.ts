import axios, { AxiosInstance } from 'axios'

export interface DailySummary {
  id: string,
  date: string,
  productivity_pulse: number,
  very_productive_percentage: number;
  productive_percentage: number;
  neutral_percentage: number;
  distracting_percentage: number;
  very_distracting_percentage: number;
  all_productive_percentage: number;
  all_distracting_percentage: number;
  uncategorized_percentage: number;
  business_percentage: number;
  communication_and_scheduling_percentage: number;
  social_networking_percentage: number;
  design_and_composition_percentage: number;
  entertainment_percentage: number;
  news_percentage: number;
  software_development_percentage: number;
  reference_and_learning_percentage: number;
  shopping_percentage: number;
  utilities_percentage: number;
  total_hours: number;
  very_productive_hours: number;
  productive_hours: number;
  neutral_hours: number;
  distracting_hours: number;
  very_distracting_hours: number;
  all_productive_hours: number;
  all_distracting_hours: number;
  uncategorized_hours: number;
  business_hours: number;
  communication_and_scheduling_hours: number;
  social_networking_hours: number;
  design_and_composition_hours: number;
  entertainment_hours: number;
  news_hours: number;
  software_development_hours: number;
  reference_and_learning_hours: number;
  shopping_hours: number;
  utilities_hours: number;
  total_duration_formatted: number;
  very_productive_duration_formatted: number;
  productive_duration_formatted: number;
  neutral_duration_formatted: number;
  distracting_duration_formatted: number;
  very_distracting_duration_formatted: number;
  all_productive_duration_formatted: number;
  all_distracting_duration_formatted: number;
  uncategorized_duration_formatted: number;
  business_duration_formatted: number;
  communication_and_scheduling_duration_formatted: number;
  social_networking_duration_formatted: number;
  design_and_composition_duration_formatted: number;
  entertainment_duration_formatted: number;
  news_duration_formatted: number;
  software_development_duration_formatted: number;
  reference_and_learning_duration_formatted: number;
  shopping_duration_formatted: number;
  utilities_duration_formatted: number;
}

export default class RescueTimeService {
  private readonly baseUrl = 'https://www.rescuetime.com/anapi'
  private readonly client: AxiosInstance
  constructor(private readonly apiKey) {
    this.client = axios.create({
      baseURL: this.baseUrl
    })
  }

  public async dailySummary(): Promise<ReadonlyArray<DailySummary>> {
    const r = await this.client.get('/daily_summary_feed?key=' + this.apiKey)
    return r.data;
  }
}