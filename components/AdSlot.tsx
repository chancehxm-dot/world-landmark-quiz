type Props = {
  id: string;
  label?: string;
};

export function AdSlot({ id, label = 'Advertisement' }: Props) {
  return (
    <div className="jc-ad-slot" aria-label={label}>
      <span className="jc-ad-badge">{label}</span>
      <div className="jc-ad-content" id={id} />
    </div>
  );
}
