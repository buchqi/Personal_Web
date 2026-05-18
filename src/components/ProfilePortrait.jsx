import profilePicture from "../assets/profile_picture.png";

function ProfilePortrait() {
  return (
    <div className="relative mx-auto flex w-full max-w-[340px] justify-center lg:ml-auto">
      <div className="absolute left-1/2 top-6 h-60 w-48 -translate-x-1/2 rounded-2xl bg-gradient-to-br from-blue-500/20 via-slate-300/40 to-slate-950/20 blur-2xl md:h-72 md:w-56" />
      <div className="group relative rounded-2xl bg-white/20 p-2 shadow-[0_26px_80px_rgba(15,23,42,0.18),0_10px_28px_rgba(15,23,42,0.12)] transition-all duration-300 hover:-translate-y-1">
        <div className="absolute -bottom-3 -right-3 h-full w-full rounded-2xl bg-slate-950/10 blur-sm" />
        <div className="relative overflow-hidden rounded-2xl shadow-2xl shadow-black/30">
          <img
            src={profilePicture}
            alt="Giorgi Tkebuchava"
            className="h-60 w-48 rounded-2xl object-cover transition-all duration-300 group-hover:scale-105 md:h-72 md:w-56"
          />
        </div>
      </div>
    </div>
  );
}

export default ProfilePortrait;
