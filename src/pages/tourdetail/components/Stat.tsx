const Stat = ({ icon, label, value, accent }: any) => (
  <div className={`rounded-xl p-4 ${accent ? "bg-accent/10" : "bg-muted"}`}>
    {icon && <div className="text-accent mb-2">{icon}</div>}
    <p className="text-sm text-muted-foreground">{label}</p>
    <p className="font-semibold">{value}</p>
  </div>
);

export default Stat;
