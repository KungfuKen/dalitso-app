import Head from "next/head";
import Image from "next/image";
import "../../styles/globals.css";
import { Analytics } from "@vercel/analytics/react";

import dynamic from "next/dynamic";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";

import "katex/dist/katex.min.css";

const ReactMarkdown = dynamic(() => import("react-markdown"), {
  ssr: false,
});

const articleContent = {
  title: "How BYD's near 500 km/h world record was made possible.",

  content: String.raw`
The fastest production car in the world is an electric car manufactured by BYD's sub-brand Yangwang, called the U9 Xtreme.

For years it was assumed electric cars are only dominant short sprints, like the 0 to 100 km/h sprint, 
but could never match high performance internal combustion engines in top end speed. But in late 2025 the U9 Xtreme 
shattered this assumption by being the first production car to achieve a top speed of, as near as makes no difference, 500 km/h.

This article analyses how this car's electric drivetrain dubbed the $e^4$ platform - consisting of four independent electric motors - 
is able to propel the U9 to nearly 500 km/h and possibly beyond.

## VEHICLE SPECIFICATIONS

- Maximum Power: 2,220 kW, with 4 motors producing 550 kW each.
- Maximum Torque: 2800 Nm (estimated)
- Torque at VMAX: 177 Nm per motor.
- Voltage Architecture: 1,200 V.
- Max RPM: 30,000 RPM.
- Battery: 80 kWh, 30C discharge rate, maximum current 2,000 A.

## PHYSICS REQUIREMENTS

$$
F_{\text{drag}} = \frac{1}{2}\rho C_d A v^2
$$

Where $C_d = 0.240$, $A = 2.200\,\text{m}^2$, $v = 138.889\,\text{m/s}$, and $\rho = 1.225$.

$$
F_{\text{drag}} = 12\,476.871\,\text{N}
$$

$$
F_{\text{drive}} = \frac{P}{v}
$$

Where $P = 2,220\,\text{kW}$.

$$
F_{\text{drive}} = 15\,983.987\,\text{N}
$$

$$
F_{\text{drive}} \gg F_{\text{drag}}
$$

Suggesting the theoretical top speed is greater than 500 km/h.

## POWER AT THE WHEELS OUTPUT

$$
P = \tau \times \omega
$$

$\omega$: $30\,000\,\text{RPM} \rightarrow 3\,141.59\,\text{rad/s}$

$\tau$: 177 Nm at 500 km/h.

$$
P =
3\,141.59\,\text{rad/s}
\times
176\,\text{Nm}
\times
4
=
2\,220\,\text{kW}
$$

## SYSTEM MODEL

Battery [DC] $\rightarrow$ Inverter [3-phase AC] $\rightarrow$ Stator Coils [Rotating Magnetic Field] $\rightarrow$ Rotor [Torque] $\rightarrow$ Gear [Ratio] $\rightarrow$ Wheels

## ELECTRICAL POWER SUPPLIED

Battery power capacity:

$$
P_{\text{batt}}
=
\text{Energy Capacity}
\times
\text{C rating}
$$

$$
P_{\text{batt}}
=
80\,000\,\text{Wh}
\times
30\,\text{C}
=
2\,400\,000\,\text{W}
=
2\,400\,\text{kW}
$$

The electrical power relationship is:

$$
P = V \times I \times \eta
$$

With a 1,200 V architecture and 2,000 A current:

$$
P_{\text{DC}} = 1\,200 \times 2\,000 = 2.4\,\text{MW}
$$

Since 2,220 kW reaches the wheels while approximately 2,400 kW is supplied by the battery:

$$
\eta = \frac{2\,220}{2\,400}
$$

## ELECTROMAGNETIC CONVERSION

### Inverter DC to 3-Phase AC

The inverter converts DC into three-phase AC.

The synchronous-speed relationship is:

$$
n_s = \frac{60f}{p}
$$

where $f$ is the AC electrical frequency and $p$ is the number of pole pairs.

For 30,000 RPM and 2 pole pairs:

$$
f = \frac{n_s p}{60}
$$

$$
f =
\frac{30\,000 \times 2}{60}
=
1\,000\,\text{Hz}
$$

Therefore, the inverter must be able to produce a three-phase AC current at approximately 1 kHz.

### Three-Phase Currents

$$
i_a = I_m\cos(\omega t)
$$

$$
i_b =
I_m\cos\left(
\omega t-\frac{2\pi}{3}
\right)
$$

$$
i_c =
I_m\cos\left(
\omega t-\frac{4\pi}{3}
\right)
$$

The currents are 120° or $\frac{2\pi}{3}$ radians out of phase.

The varying current in the coils produces magnetomotive force:

$$
\text{MMF} = Ni
$$

The coils are arranged around the stator 120° apart.

Therefore:

$$
\text{MMF}_a = Ni_a(t)\cos(\theta)
$$

$$
\text{MMF}_b =
Ni_b(t)
\cos\left(
\theta-\frac{2\pi}{3}
\right)
$$

$$
\text{MMF}_c =
Ni_c(t)
\cos\left(
\theta-\frac{4\pi}{3}
\right)
$$

### Applying Ampere's Law

$$
\oint H\cdot dl = Ni
$$

$$
H_{\text{gap}}l_{\text{gap}}
=
\text{MMF}_{\text{total}}
$$

Since:

$$
B = \mu H
$$

we obtain:

$$
B_{\text{gap}}
=
\frac{\mu}{l_{\text{gap}}}
\text{MMF}_{\text{total}}
$$

The total MMF is:

$$
\text{MMF}_{\text{total}}
=
\text{MMF}_a+
\text{MMF}_b+
\text{MMF}_c
$$

For a balanced three-phase system:

$$
\text{MMF}_{\text{total}}
=
\frac{3}{2}NI_m
\cos(\omega t-\theta)
$$

Therefore:

$$
B_{\text{peak}}
=
\frac{3\mu NI_m}{2l_{\text{gap}}}
$$

The relationship between mechanical and electrical angular velocity is:

$$
\omega_{\text{mechanical}}
=
\frac{\omega_{\text{electrical}}}{p}
$$

Lorentz force:

$$
F = I(L\times B)
$$

Electromagnetic torque reaches its maximum when the stator and rotor magnetic fields are 90° apart:

$$
T \propto |B_s||B_r|\sin(\alpha)
$$

$$
\alpha = 90^\circ
$$

### Transforming into the dq Frame

The Clarke transform converts:

$$
abc \rightarrow \alpha\beta
$$

The Park transform then converts:

$$
\alpha\beta \rightarrow dq
$$

$I_d$ is aligned with the rotor flux, while $I_q$ is perpendicular to the rotor flux.

Torque is primarily produced by $I_q$.

Therefore, the PMSM torque equation is:

$$
T = \frac{3}{2}p\lambda I_q
$$

### Back-EMF and Field Weakening

The back-EMF is produced by the rotating rotor flux.

Back-EMF is proportional to rotor speed and flux linkage.

At high speed, the inverter's available voltage becomes a constraint. The effective flux linkage can be reduced by making $I_d$ negative.

The PMSM voltage equations in the dq frame are:

$$
v_d = Ri_d-\omega_e L_q I_q
$$

$$
v_q =
RI_q+
\omega_e L_d I_d+
\omega_e\lambda
$$

The term:

$$
\omega_e\lambda
$$

represents the back-EMF contribution.

With a 1,200 V DC bus, voltage headroom is limited.

Making $I_d$ negative produces a magnetic field that opposes the rotor flux.

The effective flux linkage becomes:

$$
\lambda_{\text{eff}}
=
\lambda_f+L_di_d
$$

Since $i_d < 0$:

$$
\lambda_{\text{eff}} < \lambda_f
$$

Lower effective flux leads to lower back-EMF, restoring voltage headroom and allowing $I_q$ to remain non-zero at high speed.

The maximum speed is reached when the available negative $I_d$ and current limit can no longer provide sufficient flux weakening:

$$
\lambda_{\text{eff}}
=
\lambda_f+L_di_d
\rightarrow 0
$$

## ENABLING TECHNOLOGIES

- 1,200 V architecture, reducing current, cable losses, and cable weight.
- Carbon-fibre sleeved rotor, allowing operation at approximately 30,000 RPM.
- 30C Blade Battery, providing very high discharge capability.
- Ultra-thin laminations, suppressing eddy-current losses at high electrical frequency.
- Active liquid cooling of the stator, battery, and inverter.
`
};

export default function BlogPost() {
  return (
    <div className="min-h-screen bg-zinc-900 text-zinc-200">
      <Head>
        <title>YangWang U9 Xtreme Analysis</title>
        <meta
          name="description"
          content="Technical analysis of the YangWang U9 Xtreme electric powertrain."
        />
        <meta name="keywords" content="YangWang U9 Xtreme, Electric Vehicle, EV, Technology" />
        <meta name="author" content="DTB Insights" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="YangWang U9 Xtreme Analysis" />
        <meta
          property="og:description"
          content="Technical analysis of the YangWang U9 Xtreme electric powertrain."
        />
        <meta property="og:image" content="/YangWangU9.png" />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://dtbinsights.com/blogs/yangwang-u9-analysis" />
      </Head>

      <main className="mx-auto w-full max-w-4xl px-6 py-12">
        <article className="font-mono text-sm leading-relaxed text-zinc-300">

          <h1 className="mb-10 text-center text-2xl font-bold leading-tight text-white">
            {articleContent.title}
          </h1>

          <div className="mb-10 flex justify-center">
            <Image
              src="/U9CoverImage.png"
              alt="YangWang U9 Xtreme"
              width={600}
              height={300}
              className="rounded-lg"
              priority
            />
          </div>

          <ReactMarkdown
            remarkPlugins={[remarkMath]}
            rehypePlugins={[rehypeKatex]}
            components={{
              h2: ({ children }) => (
                <h2 className="mt-12 mb-5 text-base font-bold text-amber-400">
                  {children}
                </h2>
              ),

              h3: ({ children }) => (
                <h3 className="mt-8 mb-4 text-sm font-bold text-amber-300">
                  {children}
                </h3>
              ),

              p: ({ children }) => (
                <p className="mb-5 text-sm leading-7 text-zinc-300">
                  {children}
                </p>
              ),

              ul: ({ children }) => (
                <ul className="mb-6 list-disc space-y-2 pl-6 text-sm text-zinc-300">
                  {children}
                </ul>
              ),

              li: ({ children }) => (
                <li>{children}</li>
              ),

              strong: ({ children }) => (
                <strong className="font-bold text-white">
                  {children}
                </strong>
              ),

              code: ({ children }) => (
                <code className="font-mono text-sm text-zinc-200">
                  {children}
                </code>
              ),
            }}
          >
            {articleContent.content}
          </ReactMarkdown>
        </article>
      </main>

      <Analytics />
    </div>
  );
}