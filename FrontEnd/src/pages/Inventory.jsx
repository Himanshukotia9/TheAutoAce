import { useState } from "react";
import { ChevronRight, ChevronDown, SlidersHorizontal, RotateCcw, } from "lucide-react";
import { CARS, MAKES, SORT_OPTIONS, formatPrice, formatMileage, } from "../../public/data.jsx";

function CarCard({ car }) {
  return (
    <article className="group overflow-hidden rounded-xl border border-white/10 bg-white/3 transition-all duration-300 hover:border-amber-500/40 hover:bg-white/5">
      <div className="relative aspect-16/10 overflow-hidden">
        <img
          src={car.image}
          alt={`${car.year} ${car.make} ${car.model}`}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-linear-to-t from-ink-950/80 via-transparent to-transparent" />

        {car.featured && (
          <span className="absolute left-3 top-3 rounded-full bg-amber-500 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-ink-950">
            Featured
          </span>
        )}

        <div className="absolute bottom-3 left-4 right-4 flex items-end justify-between">
          <div>
            <p className="text-[11px] uppercase tracking-wider text-white/60">
              {car.make}
            </p>
            <h3 className="font-display text-xl text-white">{car.model}</h3>
          </div>

          <span className="text-xs text-white/50">{car.year}</span>
        </div>
      </div>

      <div className="p-5">
        <div className="grid grid-cols-2 gap-3 text-sm">
          <div>
            <p className="text-[10px] uppercase tracking-wider text-white/40">
              Mileage
            </p>
            <p className="font-medium text-white/80">
              {formatMileage(car.mileage)} mi
            </p>
          </div>

          <div>
            <p className="text-[10px] uppercase tracking-wider text-white/40">
              Power
            </p>
            <p className="font-medium text-white/80">
              {car.horsepower} hp
            </p>
          </div>

          <div>
            <p className="text-[10px] uppercase tracking-wider text-white/40">
              Transmission
            </p>
            <p className="font-medium text-white/80">
              {car.transmission}
            </p>
          </div>

          <div>
            <p className="text-[10px] uppercase tracking-wider text-white/40">
              Fuel
            </p>
            <p className="font-medium text-white/80">{car.fuel}</p>
          </div>
        </div>

        <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-4">
          <span className="font-display text-2xl text-amber-400">
            {formatPrice(car.price)}
          </span>

          <button className="group/btn flex items-center gap-1.5 text-xs font-medium uppercase tracking-wider text-white/60 transition-colors hover:text-amber-400">
            Details
            <ChevronRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover/btn:translate-x-0.5" />
          </button>
        </div>
      </div>
    </article>
  );
}

export default function Inventory() {
  const [make, setMake] = useState("All");
  const [sort, setSort] = useState("featured");
  const [makeOpen, setMakeOpen] = useState(false);
  const [sortOpen, setSortOpen] = useState(false);

  const filtered = CARS.filter(
    (c) => make === "All" || c.make === make
  );

  const sorted = [...filtered].sort((a, b) => {
    switch (sort) {
      case "price-asc":
        return a.price - b.price;

      case "price-desc":
        return b.price - a.price;

      case "year-desc":
        return b.year - a.year;

      case "year-asc":
        return a.year - b.year;

      case "mileage-asc":
        return a.mileage - b.mileage;

      case "horsepower-desc":
        return b.horsepower - a.horsepower;

      case "featured":
      default:
        if (a.featured && !b.featured) return -1;
        if (!a.featured && b.featured) return 1;
        return b.year - a.year;
    }
  });

  const activeSortLabel =
    SORT_OPTIONS.find((o) => o.value === sort)?.label ?? "Sort";

  const hasActiveFilters =
    make !== "All" || sort !== "featured";

  const clearFilters = () => {
    setMake("All");
    setSort("featured");
  };

  return (
    <section
      id="inventory"
      className="border-t border-white/5 bg-ink-950 px-7 py-20 sm:px-12 lg:px-20"
    >
      <div className="mx-auto max-w-6xl">
        {/* Heading */}
        <div className="mb-10 flex flex-col gap-4">
          <span className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.3em] text-amber-400 animate-fade-up">
            <span className="h-px w-10 bg-amber-500" />
            The Collection
          </span>

          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <h2
              className="font-display text-4xl text-white sm:text-5xl animate-fade-up"
              style={{ animationDelay: "0.1s" }}
            >
              Cars for Sale
            </h2>

            <p
              className="max-w-sm text-sm text-white/50 animate-fade-up"
              style={{ animationDelay: "0.15s" }}
            >
              {sorted.length} vehicle
              {sorted.length !== 1 ? "s" : ""} available
            </p>
          </div>
        </div>

        {/* Filter / Sort Bar */}
        <div
          className="mb-10 flex flex-col gap-4 rounded-xl border border-white/10 bg-white/3 p-4 animate-fade-up sm:flex-row sm:items-center sm:justify-between sm:p-5"
          style={{ animationDelay: "0.2s" }}
        >
          {/* Make Dropdown */}
          <div className="relative shrink-0">
            <button
              onClick={() => {
                setMakeOpen((v) => !v);
                setSortOpen(false);
              }}
              className="flex w-full items-center justify-between gap-2 rounded-lg border border-white/15 px-4 py-2.5 text-sm text-white/80 transition-colors hover:border-white/30 sm:w-auto"
            >
              <SlidersHorizontal className="h-4 w-4 text-white/40" />

              <span className="text-white/40">Make:</span>

              <span className="font-medium text-white">{make}</span>

              <ChevronDown
                className={`h-4 w-4 text-white/50 transition-transform duration-300 ${
                  makeOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {makeOpen && (
              <>
                <div
                  className="fixed inset-0 z-10"
                  onClick={() => setMakeOpen(false)}
                />

                <div className="absolute left-0 z-20 mt-2 w-48 overflow-hidden rounded-lg border border-white/30 bg-black py-1 shadow-xl">
                  {MAKES.map((m) => (
                    <button
                      key={m}
                      onClick={() => {
                        setMake(m);
                        setMakeOpen(false);
                      }}
                      className={`flex w-full items-center justify-between px-4 py-2.5 text-sm transition-colors hover:bg-white/10 ${
                        make === m
                          ? "text-amber-400"
                          : "text-white/70"
                      }`}
                    >
                      {m}

                      {make === m && (
                        <ChevronRight className="h-3.5 w-3.5" />
                      )}
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>

          {/* Sort Dropdown */}
          <div className="relative shrink-0">
            <button
              onClick={() => {
                setSortOpen((v) => !v);
                setMakeOpen(false);
              }}
              className="flex w-full items-center justify-between gap-2 rounded-lg border border-white/15 px-4 py-2.5 text-sm text-white/80 transition-colors hover:border-white/30 sm:w-auto"
            >
              <span className="text-white/40">Sort:</span>

              <span className="font-medium text-white">
                {activeSortLabel}
              </span>

              <ChevronDown
                className={`h-4 w-4 text-white/50 transition-transform duration-300 ${
                  sortOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {sortOpen && (
              <>
                <div
                  className="fixed inset-0 z-10"
                  onClick={() => setSortOpen(false)}
                />

                <div className="absolute right-0 z-20 mt-2 w-56 overflow-hidden rounded-lg border border-white/30 bg-black py-1 shadow-xl">
                  {SORT_OPTIONS.map((opt) => (
                    <button
                      key={opt.value}
                      onClick={() => {
                        setSort(opt.value);
                        setSortOpen(false);
                      }}
                      className={`flex w-full items-center justify-between px-4 py-2.5 text-sm transition-colors hover:bg-white/10 ${
                        sort === opt.value
                          ? "text-amber-400"
                          : "text-white/70"
                      }`}
                    >
                      {opt.label}

                      {sort === opt.value && (
                        <ChevronRight className="h-3.5 w-3.5" />
                      )}
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>

          {/* Clear Filters */}
          {hasActiveFilters && (
            <button
              onClick={clearFilters}
              className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-lg border border-white/15 px-5 py-2.5 text-sm font-medium text-white/80 transition-all duration-300 hover:border-amber-500 hover:bg-amber-500 hover:text-ink-950"
            >
              <RotateCcw className="h-4 w-4 transition-transform duration-300 group-hover:-rotate-180" />
              Clear Filters
            </button>
          )}
        </div>

        {/* Car Grid */}
        {sorted.length === 0 ? (
          <div className="rounded-xl border border-white/10 bg-white/3 py-16 text-center">
            <p className="text-sm text-white/50">
              No vehicles match this filter.
            </p>
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {sorted.map((car) => (
              <CarCard key={car.id} car={car} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}