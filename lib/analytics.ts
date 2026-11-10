type ConversionEvent =
  | 'consultation_click'
  | 'contact_enquiry_success'
  | 'quote_request_success'
  | 'service_booking_success'
  | 'ai_demo_interaction'
  | 'ai_opportunity_assessment_complete'
  | 'ai_savings_estimate_complete'
  | 'cyber_health_check_complete'
  | 'phone_click';

export function trackConversion(
  eventName: ConversionEvent,
  parameters?: Record<string, string | number>
) {
  if (typeof window === 'undefined') return;
  window.gtag?.('event', eventName, parameters);
}
