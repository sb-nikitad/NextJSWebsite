import { Anton } from "next/font/google";

const anton = Anton({ weight: "400", subsets: ["latin"] });

export default function Page() {
  return (
    <div className="bg-white mt-[130px] text-black lg:px-[300px]">
      <div className={`${anton.className} pt-10 text-6xl`}>
        GENERATING MORE SPEED WITH EFFICIENT TURNS IN YOUR BACKSWING AND
        DOWNSWING
      </div>

      <div className={`${anton.className} py-10`}>Apr 27</div>

      <div className="[&>*]:py-5 [&>*]:leading-relaxed tracking-normal text-lg">
        <div>
          Turning your body effectively in the backswing and downswing is quite
          naturally an important aspect of a good golf swing. Our new Sportsbox
          AI app can measure many of these important motions.
        </div>
        <div>Let’s talk about four of them:</div>
        <div>
          Pelvis (Lower Body) Turn at Top. This is how much you turn your pelvis
          during the backswing, specifically how much you have turned by the top
          of your backswing.
        </div>
        <div>
          Chest (Upper Body) Turn at Top. This is how much you turn your chest
          at the top of the backswing.
        </div>
        <div>
          X-Factor at Top. This is the difference between your chest turn and
          your pelvis turn. It is called X-Factor because if you look at the top
          of your backswing position from above and draw a line side-to-side
          through your pelvis and chest, the two lines make an X.
        </div>
        <div>
          X-Factor Stretch. This is the difference in the X-Factor value at the
          time your pelvis turns from backswing to downswing, (called
          transition), compared to when the X-Factor reaches maximum early in
          the downswing.
        </div>
        <div>
          The more you turn in the backswing, theoretically the more range of
          motion and energy you will have to deliver into the downswing and
          consequently the ball. However there is more to it than just turning
          more. A good backswing will allow upper body (the chest) to turn more
          than the lower body (the pelvis). This creates a coil and stretch of
          your abdominal muscles which creates muscle tension and allows them to
          pull back rapidly in the downswing closing the X-Factor and speeding
          up your chest. This speed is then transferred to the arms, then the
          club, and finally the ball at impact.
        </div>
        <div>
          So, the more turn of the chest with respect to the pelvis the bigger
          the X-Factor, and theoretically, the more energy your abdomen muscles
          can produce.
        </div>
        <div>
          Another important point other than just the tension in the muscles
          from the X-Factor, is the rapid extra stretch of the abdomen muscles
          early in the downswing, called the X-Factor Stretch. In a good
          transition from backswing to downswing your pelvis should turn before
          your chest, in fact, your pelvis should turn and move into the
          downswing while your chest is still turning backwards and is still in
          the backswing. This is like tweaking the coil of the spring an extra
          bit (and quickly). This gives you extra speed in the downswing. This
          biomechanical principle of muscles is called the Stretch-Shorten Cycle
          of Muscle.
        </div>
        <div>
          Let’s look at some body turn numbers for tour players versus high
          handicappers.
        </div>
        <div>All the numbers represent degrees of turn.</div>
        <div>Notice some things from this table:</div>

        <ul className="list-disc pl-[40px]">
          <li>
            High handicappers in this group turn their pelvis more than the pros
            but not their chest (upper body), that means they have a lower
            X-Factor and potentially less power available for the swing.
          </li>
          <li>
            Notice their X-Factor Stretch is also lower than the pros, so they
            are not getting as much extra power from the Stretch Shorten Cycle
            of the muscles.
          </li>
        </ul>
        <div>
          One important point I should add is that the Chest Turn at Top minus
          Pelvis Turn at Top does not exactly equal X-Factor at Top. If you were
          standing perfectly vertical that would be the case but since we are
          bent over and tilted to the side that is no longer the case. In 2D
          they would subtract exactly but in a true 3D world that is not the
          case.
        </div>
        <div>
          So, get a good upper body/chest turn in the backswing, reasonable
          pelvis turn and a decent X-Factor. Typical instructor knowledge
          suggests 90, 45, 45, and this is a good rule of thumb. But don't
          forget that the turning of the pelvis precedes the turning of the
          upper body/chest into the downswing, and this will give you an
          X-Factor Stretch, and a little more zing to your downswing!
        </div>
        <div>—Dr Phil Cheetham, 4/26/21</div>
      </div>
    </div>
  );
}
