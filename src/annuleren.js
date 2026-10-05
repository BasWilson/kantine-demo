// Een bestelling mag je annuleren tot 10:00 op de dag zelf.
export function kanAnnuleren(nu) {
  return nu.getHours() < 10;
}
